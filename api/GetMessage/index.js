module.exports = async function (context, req) {
  const date = "2024-05-04T15:09:24.566Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

