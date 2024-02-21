module.exports = async function (context, req) {
  const date = "2024-02-21T01:41:37.897Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

