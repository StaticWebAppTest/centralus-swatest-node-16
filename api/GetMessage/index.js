module.exports = async function (context, req) {
  const date = "2024-11-27T08:16:53.278Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

