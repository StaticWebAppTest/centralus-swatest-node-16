module.exports = async function (context, req) {
  const date = "2023-02-25T14:08:16.152Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

