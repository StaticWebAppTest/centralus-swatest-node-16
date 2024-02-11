module.exports = async function (context, req) {
  const date = "2024-02-11T10:09:15.204Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

