module.exports = async function (context, req) {
  const date = "2023-07-09T01:04:42.373Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

