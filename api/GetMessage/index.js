module.exports = async function (context, req) {
  const date = "2023-04-23T19:06:53.963Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

