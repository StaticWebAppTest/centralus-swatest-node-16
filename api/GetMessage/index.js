module.exports = async function (context, req) {
  const date = "2024-11-15T18:16:03.519Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

