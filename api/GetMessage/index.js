module.exports = async function (context, req) {
  const date = "2024-09-15T10:11:01.604Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

