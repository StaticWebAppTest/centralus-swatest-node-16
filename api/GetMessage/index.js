module.exports = async function (context, req) {
  const date = "2024-10-22T09:12:34.187Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

