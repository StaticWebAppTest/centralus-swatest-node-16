module.exports = async function (context, req) {
  const date = "2023-08-30T08:11:29.475Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

