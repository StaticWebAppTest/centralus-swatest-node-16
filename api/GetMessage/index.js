module.exports = async function (context, req) {
  const date = "2024-01-18T00:44:02.955Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

