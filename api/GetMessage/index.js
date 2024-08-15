module.exports = async function (context, req) {
  const date = "2024-08-15T16:13:38.870Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

