module.exports = async function (context, req) {
  const date = "2023-08-05T16:09:22.977Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

