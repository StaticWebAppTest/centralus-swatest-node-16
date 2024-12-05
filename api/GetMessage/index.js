module.exports = async function (context, req) {
  const date = "2024-12-05T20:14:09.870Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

