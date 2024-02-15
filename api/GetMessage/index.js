module.exports = async function (context, req) {
  const date = "2024-02-15T16:10:42.977Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

