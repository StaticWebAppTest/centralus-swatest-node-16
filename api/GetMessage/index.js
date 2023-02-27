module.exports = async function (context, req) {
  const date = "2023-02-27T19:08:34.939Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

