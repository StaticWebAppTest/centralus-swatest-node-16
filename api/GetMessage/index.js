module.exports = async function (context, req) {
  const date = "2024-07-02T16:14:21.409Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

