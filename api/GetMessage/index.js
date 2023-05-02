module.exports = async function (context, req) {
  const date = "2023-05-02T14:08:29.971Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

