module.exports = async function (context, req) {
  const date = "2023-11-22T07:08:39.283Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

