module.exports = async function (context, req) {
  const date = "2025-03-24T17:11:38.656Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

