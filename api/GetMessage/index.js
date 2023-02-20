module.exports = async function (context, req) {
  const date = "2023-02-20T06:13:26.548Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

