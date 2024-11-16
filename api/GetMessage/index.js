module.exports = async function (context, req) {
  const date = "2024-11-16T22:10:25.977Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

