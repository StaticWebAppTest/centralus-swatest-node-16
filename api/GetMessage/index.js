module.exports = async function (context, req) {
  const date = "2024-02-29T14:11:16.453Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

