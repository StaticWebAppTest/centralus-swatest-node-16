module.exports = async function (context, req) {
  const date = "2023-10-31T02:17:25.201Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

