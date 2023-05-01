module.exports = async function (context, req) {
  const date = "2023-05-01T03:09:40.642Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

