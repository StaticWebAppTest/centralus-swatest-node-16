module.exports = async function (context, req) {
  const date = "2023-12-26T14:08:21.075Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

