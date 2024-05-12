module.exports = async function (context, req) {
  const date = "2024-05-12T00:48:56.608Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

