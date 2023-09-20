module.exports = async function (context, req) {
  const date = "2023-09-20T01:42:31.007Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

