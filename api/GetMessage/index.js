module.exports = async function (context, req) {
  const date = "2024-02-18T22:09:58.949Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

