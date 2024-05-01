module.exports = async function (context, req) {
  const date = "2024-05-01T17:09:15.050Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

