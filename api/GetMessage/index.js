module.exports = async function (context, req) {
  const date = "2022-08-22T17:13:39.379Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

