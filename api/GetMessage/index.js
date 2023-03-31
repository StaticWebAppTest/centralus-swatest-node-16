module.exports = async function (context, req) {
  const date = "2023-03-31T21:06:54.560Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

