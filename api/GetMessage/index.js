module.exports = async function (context, req) {
  const date = "2023-07-08T02:53:42.851Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

