module.exports = async function (context, req) {
  const date = "2024-02-07T11:08:17.646Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

