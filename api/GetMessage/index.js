module.exports = async function (context, req) {
  const date = "2024-11-19T10:13:39.409Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

