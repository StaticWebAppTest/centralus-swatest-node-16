module.exports = async function (context, req) {
  const date = "2023-01-06T03:10:49.409Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

