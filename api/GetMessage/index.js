module.exports = async function (context, req) {
  const date = "2022-06-01T23:11:39.905Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

