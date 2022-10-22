module.exports = async function (context, req) {
  const date = "2022-10-22T16:17:54.660Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

