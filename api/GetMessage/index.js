module.exports = async function (context, req) {
  const date = "2023-10-01T10:08:16.372Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

