module.exports = async function (context, req) {
  const date = "2024-09-26T02:13:46.800Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

