module.exports = async function (context, req) {
  const date = "2023-04-29T21:06:57.391Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

