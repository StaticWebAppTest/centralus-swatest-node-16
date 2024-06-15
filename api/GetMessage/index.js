module.exports = async function (context, req) {
  const date = "2024-06-15T03:11:02.832Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

