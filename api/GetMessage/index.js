module.exports = async function (context, req) {
  const date = "2023-07-13T19:06:43.958Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

