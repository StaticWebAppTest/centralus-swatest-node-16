module.exports = async function (context, req) {
  const date = "2022-03-21T02:22:46.464Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

