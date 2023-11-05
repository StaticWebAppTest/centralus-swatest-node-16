module.exports = async function (context, req) {
  const date = "2023-11-05T22:07:49.079Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

