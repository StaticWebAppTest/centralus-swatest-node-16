module.exports = async function (context, req) {
  const date = "2024-12-16T19:10:05.201Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

