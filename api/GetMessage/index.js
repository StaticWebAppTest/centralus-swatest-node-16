module.exports = async function (context, req) {
  const date = "2023-06-11T06:10:49.244Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

