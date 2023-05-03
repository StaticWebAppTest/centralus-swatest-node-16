module.exports = async function (context, req) {
  const date = "2023-05-03T14:07:58.566Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

