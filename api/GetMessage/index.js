module.exports = async function (context, req) {
  const date = "2024-12-12T09:13:37.291Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

