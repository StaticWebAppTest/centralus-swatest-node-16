module.exports = async function (context, req) {
  const date = "2024-02-28T10:09:57.257Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

