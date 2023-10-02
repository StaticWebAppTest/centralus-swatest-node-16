module.exports = async function (context, req) {
  const date = "2023-10-02T03:09:34.033Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

