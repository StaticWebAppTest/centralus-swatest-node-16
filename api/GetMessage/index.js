module.exports = async function (context, req) {
  const date = "2025-05-21T01:06:27.966Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

