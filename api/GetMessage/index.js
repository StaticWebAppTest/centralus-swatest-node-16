module.exports = async function (context, req) {
  const date = "2024-06-03T18:13:33.596Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

