module.exports = async function (context, req) {
  const date = "2023-05-16T19:07:10.244Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

