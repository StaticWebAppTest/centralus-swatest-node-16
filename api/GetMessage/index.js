module.exports = async function (context, req) {
  const date = "2024-08-21T19:10:02.004Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

