module.exports = async function (context, req) {
  const date = "2024-09-08T19:08:57.895Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

