module.exports = async function (context, req) {
  const date = "2024-02-01T13:09:23.018Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

