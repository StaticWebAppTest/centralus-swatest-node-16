module.exports = async function (context, req) {
  const date = "2023-01-16T09:10:04.692Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

