module.exports = async function (context, req) {
  const date = "2023-06-06T05:09:10.892Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

