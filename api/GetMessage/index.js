module.exports = async function (context, req) {
  const date = "2024-06-16T10:11:01.555Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

