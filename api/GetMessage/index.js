module.exports = async function (context, req) {
  const date = "2024-03-24T18:12:56.620Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

