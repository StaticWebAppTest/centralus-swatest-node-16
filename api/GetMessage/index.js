module.exports = async function (context, req) {
  const date = "2023-07-07T05:09:57.825Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

