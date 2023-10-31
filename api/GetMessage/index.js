module.exports = async function (context, req) {
  const date = "2023-10-31T12:16:40.469Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

