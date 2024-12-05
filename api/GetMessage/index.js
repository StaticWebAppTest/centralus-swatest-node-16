module.exports = async function (context, req) {
  const date = "2024-12-05T06:18:26.139Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

