module.exports = async function (context, req) {
  const date = "2023-11-09T03:09:25.548Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

