module.exports = async function (context, req) {
  const date = "2024-08-11T19:09:05.727Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

