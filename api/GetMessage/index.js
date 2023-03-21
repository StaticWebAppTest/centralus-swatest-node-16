module.exports = async function (context, req) {
  const date = "2023-03-21T18:11:41.379Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

