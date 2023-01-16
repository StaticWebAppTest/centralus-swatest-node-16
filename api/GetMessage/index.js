module.exports = async function (context, req) {
  const date = "2023-01-16T00:50:43.412Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

