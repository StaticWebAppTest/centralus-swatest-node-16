module.exports = async function (context, req) {
  const date = "2022-09-12T22:12:00.548Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

