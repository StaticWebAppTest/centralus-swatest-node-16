module.exports = async function (context, req) {
  const date = "2023-06-01T10:10:38.217Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

