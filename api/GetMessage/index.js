module.exports = async function (context, req) {
  const date = "2024-01-16T21:08:53.894Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

