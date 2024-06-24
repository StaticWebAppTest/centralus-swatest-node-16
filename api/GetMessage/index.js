module.exports = async function (context, req) {
  const date = "2024-06-24T14:10:11.259Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

