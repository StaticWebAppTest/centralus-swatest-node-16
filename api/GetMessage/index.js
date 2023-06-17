module.exports = async function (context, req) {
  const date = "2023-06-17T02:06:07.700Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

