module.exports = async function (context, req) {
  const date = "2023-05-18T17:07:41.977Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

