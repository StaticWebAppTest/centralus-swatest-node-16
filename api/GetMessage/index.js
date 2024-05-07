module.exports = async function (context, req) {
  const date = "2024-05-07T22:08:53.088Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

