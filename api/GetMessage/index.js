module.exports = async function (context, req) {
  const date = "2024-09-26T12:22:21.732Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

