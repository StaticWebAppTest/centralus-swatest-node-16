module.exports = async function (context, req) {
  const date = "2024-07-17T23:11:05.700Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

