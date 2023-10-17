module.exports = async function (context, req) {
  const date = "2023-10-17T10:09:48.459Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

