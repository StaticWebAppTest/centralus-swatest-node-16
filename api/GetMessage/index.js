module.exports = async function (context, req) {
  const date = "2023-11-16T08:12:04.375Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

