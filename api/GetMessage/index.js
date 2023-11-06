module.exports = async function (context, req) {
  const date = "2023-11-06T02:20:57.749Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

