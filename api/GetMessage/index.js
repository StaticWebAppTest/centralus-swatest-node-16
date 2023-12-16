module.exports = async function (context, req) {
  const date = "2023-12-16T02:20:41.808Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

