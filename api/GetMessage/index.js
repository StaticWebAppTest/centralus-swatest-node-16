module.exports = async function (context, req) {
  const date = "2024-06-03T17:09:46.186Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

