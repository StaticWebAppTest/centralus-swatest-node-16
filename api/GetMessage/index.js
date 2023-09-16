module.exports = async function (context, req) {
  const date = "2023-09-16T21:06:41.213Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

