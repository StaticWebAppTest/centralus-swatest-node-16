module.exports = async function (context, req) {
  const date = "2022-04-21T03:59:21.365Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

