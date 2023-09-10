module.exports = async function (context, req) {
  const date = "2023-09-10T19:06:33.138Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

