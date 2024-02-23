module.exports = async function (context, req) {
  const date = "2024-02-23T01:39:56.645Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

