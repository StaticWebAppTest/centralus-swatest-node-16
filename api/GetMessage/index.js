module.exports = async function (context, req) {
  const date = "2023-10-09T05:08:42.064Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

