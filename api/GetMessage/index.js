module.exports = async function (context, req) {
  const date = "2023-01-24T10:09:51.173Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

