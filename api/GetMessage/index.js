module.exports = async function (context, req) {
  const date = "2023-02-05T15:08:33.278Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

