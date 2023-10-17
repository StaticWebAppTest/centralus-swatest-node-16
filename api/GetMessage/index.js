module.exports = async function (context, req) {
  const date = "2023-10-17T12:17:26.146Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

