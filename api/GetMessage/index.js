module.exports = async function (context, req) {
  const date = "2024-10-23T12:22:34.421Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

