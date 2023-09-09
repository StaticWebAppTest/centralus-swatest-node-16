module.exports = async function (context, req) {
  const date = "2023-09-09T19:06:17.373Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

