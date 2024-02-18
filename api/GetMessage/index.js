module.exports = async function (context, req) {
  const date = "2024-02-18T03:09:15.215Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

