module.exports = async function (context, req) {
  const date = "2023-04-09T18:10:01.548Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

