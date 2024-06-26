module.exports = async function (context, req) {
  const date = "2024-06-26T06:14:38.147Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

