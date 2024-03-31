module.exports = async function (context, req) {
  const date = "2024-03-31T01:50:46.039Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

