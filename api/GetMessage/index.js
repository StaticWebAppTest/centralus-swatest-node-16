module.exports = async function (context, req) {
  const date = "2024-01-25T18:12:23.596Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

