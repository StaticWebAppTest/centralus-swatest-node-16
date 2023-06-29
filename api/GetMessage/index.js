module.exports = async function (context, req) {
  const date = "2023-06-29T17:08:25.548Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

