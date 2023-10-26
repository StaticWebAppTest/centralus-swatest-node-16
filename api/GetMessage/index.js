module.exports = async function (context, req) {
  const date = "2023-10-26T01:41:31.561Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

