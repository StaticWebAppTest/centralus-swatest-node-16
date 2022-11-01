module.exports = async function (context, req) {
  const date = "2022-11-01T10:12:44.159Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

