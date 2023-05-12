module.exports = async function (context, req) {
  const date = "2023-05-12T10:09:16.516Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

