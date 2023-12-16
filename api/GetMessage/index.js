module.exports = async function (context, req) {
  const date = "2023-12-16T10:08:43.302Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

