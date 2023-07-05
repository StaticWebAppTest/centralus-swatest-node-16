module.exports = async function (context, req) {
  const date = "2023-07-05T22:10:10.191Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

