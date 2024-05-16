module.exports = async function (context, req) {
  const date = "2024-05-16T03:11:52.362Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

