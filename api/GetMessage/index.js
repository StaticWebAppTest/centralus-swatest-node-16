module.exports = async function (context, req) {
  const date = "2023-01-02T23:09:19.459Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

