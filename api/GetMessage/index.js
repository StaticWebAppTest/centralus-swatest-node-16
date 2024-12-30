module.exports = async function (context, req) {
  const date = "2024-12-30T06:17:18.818Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

