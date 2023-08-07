module.exports = async function (context, req) {
  const date = "2023-08-07T18:10:37.825Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

