module.exports = async function (context, req) {
  const date = "2023-06-20T06:12:27.469Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

