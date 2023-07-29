module.exports = async function (context, req) {
  const date = "2023-07-29T21:06:54.601Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

