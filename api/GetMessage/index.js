module.exports = async function (context, req) {
  const date = "2023-12-15T14:08:48.309Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

