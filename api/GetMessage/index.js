module.exports = async function (context, req) {
  const date = "2024-05-16T22:09:37.823Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

