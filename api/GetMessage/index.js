module.exports = async function (context, req) {
  const date = "2024-09-21T14:09:17.179Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

