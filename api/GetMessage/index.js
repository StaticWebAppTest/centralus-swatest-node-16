module.exports = async function (context, req) {
  const date = "2024-01-25T10:10:01.418Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

