module.exports = async function (context, req) {
  const date = "2024-04-16T19:07:12.187Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

