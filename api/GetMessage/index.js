module.exports = async function (context, req) {
  const date = "2022-08-22T16:13:34.529Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

