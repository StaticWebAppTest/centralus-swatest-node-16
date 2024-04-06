module.exports = async function (context, req) {
  const date = "2024-04-06T10:09:36.418Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

