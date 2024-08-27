module.exports = async function (context, req) {
  const date = "2024-08-27T23:11:31.700Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

