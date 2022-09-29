module.exports = async function (context, req) {
  const date = "2022-09-29T10:14:23.566Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

