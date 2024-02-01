module.exports = async function (context, req) {
  const date = "2024-02-01T07:09:20.632Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

