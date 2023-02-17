module.exports = async function (context, req) {
  const date = "2023-02-17T02:22:53.278Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

