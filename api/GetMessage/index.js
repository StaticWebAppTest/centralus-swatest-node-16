module.exports = async function (context, req) {
  const date = "2023-06-16T23:08:32.328Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

