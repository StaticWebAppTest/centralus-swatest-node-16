module.exports = async function (context, req) {
  const date = "2023-01-10T04:11:54.244Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

