module.exports = async function (context, req) {
  const date = "2024-07-27T04:12:21.749Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

