module.exports = async function (context, req) {
  const date = "2023-02-22T05:09:42.061Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

