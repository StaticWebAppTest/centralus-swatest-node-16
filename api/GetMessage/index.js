module.exports = async function (context, req) {
  const date = "2023-12-15T00:44:16.962Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

