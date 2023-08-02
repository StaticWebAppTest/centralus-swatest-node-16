module.exports = async function (context, req) {
  const date = "2023-08-02T14:08:14.215Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

