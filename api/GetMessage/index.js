module.exports = async function (context, req) {
  const date = "2023-03-01T12:20:15.379Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

