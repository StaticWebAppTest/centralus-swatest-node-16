module.exports = async function (context, req) {
  const date = "2022-10-31T21:11:24.977Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

