module.exports = async function (context, req) {
  const date = "2022-03-10T02:16:42.566Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

