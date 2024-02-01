module.exports = async function (context, req) {
  const date = "2024-02-01T17:09:38.451Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

