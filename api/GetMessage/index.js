module.exports = async function (context, req) {
  const date = "2024-07-06T11:08:30.259Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

