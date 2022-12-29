module.exports = async function (context, req) {
  const date = "2022-12-29T12:16:48.357Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

