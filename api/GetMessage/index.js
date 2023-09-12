module.exports = async function (context, req) {
  const date = "2023-09-12T06:11:29.700Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

