module.exports = async function (context, req) {
  const date = "2024-12-12T10:13:54.720Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

