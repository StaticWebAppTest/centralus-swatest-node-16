module.exports = async function (context, req) {
  const date = "2023-08-18T19:06:44.462Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

