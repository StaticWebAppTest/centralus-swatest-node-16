module.exports = async function (context, req) {
  const date = "2024-09-17T23:13:03.977Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

