module.exports = async function (context, req) {
  const date = "2024-08-09T10:11:37.217Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

