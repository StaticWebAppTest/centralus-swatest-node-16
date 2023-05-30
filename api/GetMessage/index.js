module.exports = async function (context, req) {
  const date = "2023-05-30T00:50:31.977Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

