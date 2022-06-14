module.exports = async function (context, req) {
  const date = "2022-06-14T10:12:56.302Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

