module.exports = async function (context, req) {
  const date = "2023-08-16T02:13:14.749Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

