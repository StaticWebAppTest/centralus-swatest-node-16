module.exports = async function (context, req) {
  const date = "2023-07-27T05:08:13.272Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

