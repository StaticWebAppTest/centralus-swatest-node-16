module.exports = async function (context, req) {
  const date = "2023-10-22T05:08:20.660Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

