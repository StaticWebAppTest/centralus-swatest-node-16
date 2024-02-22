module.exports = async function (context, req) {
  const date = "2024-02-22T16:11:22.645Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

