module.exports = async function (context, req) {
  const date = "2024-05-15T01:54:49.068Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

