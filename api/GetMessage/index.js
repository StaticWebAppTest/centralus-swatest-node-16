module.exports = async function (context, req) {
  const date = "2023-05-23T19:07:57.138Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

