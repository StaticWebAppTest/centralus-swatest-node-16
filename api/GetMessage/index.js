module.exports = async function (context, req) {
  const date = "2023-02-15T12:19:26.421Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

