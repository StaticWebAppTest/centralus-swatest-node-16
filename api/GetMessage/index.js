module.exports = async function (context, req) {
  const date = "2024-08-26T02:03:42.252Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

