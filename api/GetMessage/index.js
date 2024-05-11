module.exports = async function (context, req) {
  const date = "2024-05-11T19:07:41.283Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

