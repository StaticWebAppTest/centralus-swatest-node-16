module.exports = async function (context, req) {
  const date = "2024-06-29T06:13:13.700Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

