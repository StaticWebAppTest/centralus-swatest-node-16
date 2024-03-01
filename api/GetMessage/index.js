module.exports = async function (context, req) {
  const date = "2024-03-01T17:12:01.045Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

