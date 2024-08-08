module.exports = async function (context, req) {
  const date = "2024-08-08T10:11:02.976Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

