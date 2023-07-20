module.exports = async function (context, req) {
  const date = "2023-07-20T19:06:53.538Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

