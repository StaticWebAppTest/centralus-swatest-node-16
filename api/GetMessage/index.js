module.exports = async function (context, req) {
  const date = "2024-06-06T01:54:45.337Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

