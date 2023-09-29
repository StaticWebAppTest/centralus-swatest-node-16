module.exports = async function (context, req) {
  const date = "2023-09-29T21:07:29.270Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

