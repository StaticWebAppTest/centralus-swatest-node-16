module.exports = async function (context, req) {
  const date = "2024-02-08T00:40:58.103Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

