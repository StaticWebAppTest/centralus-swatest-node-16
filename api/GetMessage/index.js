module.exports = async function (context, req) {
  const date = "2023-04-11T14:08:33.594Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

