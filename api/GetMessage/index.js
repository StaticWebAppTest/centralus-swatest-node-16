module.exports = async function (context, req) {
  const date = "2024-03-21T01:42:34.675Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

