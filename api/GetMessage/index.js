module.exports = async function (context, req) {
  const date = "2024-05-09T02:25:52.912Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

