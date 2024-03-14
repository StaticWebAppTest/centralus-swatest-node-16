module.exports = async function (context, req) {
  const date = "2024-03-14T17:08:29.421Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

