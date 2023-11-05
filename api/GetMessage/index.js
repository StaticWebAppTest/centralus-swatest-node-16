module.exports = async function (context, req) {
  const date = "2023-11-05T13:08:57.624Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

