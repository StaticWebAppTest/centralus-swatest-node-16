module.exports = async function (context, req) {
  const date = "2024-04-20T01:42:46.979Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

