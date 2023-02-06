module.exports = async function (context, req) {
  const date = "2023-02-06T10:10:56.302Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

