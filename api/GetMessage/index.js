module.exports = async function (context, req) {
  const date = "2023-05-02T08:11:15.259Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

