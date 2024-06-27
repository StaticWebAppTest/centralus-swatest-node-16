module.exports = async function (context, req) {
  const date = "2024-06-27T08:13:16.303Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

