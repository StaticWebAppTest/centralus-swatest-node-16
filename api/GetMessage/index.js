module.exports = async function (context, req) {
  const date = "2025-03-12T12:24:06.171Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

