module.exports = async function (context, req) {
  const date = "2023-02-09T05:09:15.825Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

