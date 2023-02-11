module.exports = async function (context, req) {
  const date = "2023-02-11T12:16:20.566Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

