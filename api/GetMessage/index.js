module.exports = async function (context, req) {
  const date = "2024-03-01T01:49:50.622Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

