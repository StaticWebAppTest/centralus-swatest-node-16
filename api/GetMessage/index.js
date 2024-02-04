module.exports = async function (context, req) {
  const date = "2024-02-04T20:08:32.389Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

