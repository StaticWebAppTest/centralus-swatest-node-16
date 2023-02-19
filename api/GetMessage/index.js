module.exports = async function (context, req) {
  const date = "2023-02-19T17:08:24.749Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

