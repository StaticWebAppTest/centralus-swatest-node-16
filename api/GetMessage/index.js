module.exports = async function (context, req) {
  const date = "2023-02-02T05:09:02.849Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

