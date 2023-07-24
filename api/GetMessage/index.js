module.exports = async function (context, req) {
  const date = "2023-07-24T02:04:13.469Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

