module.exports = async function (context, req) {
  const date = "2023-09-01T05:08:16.496Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

