module.exports = async function (context, req) {
  const date = "2024-02-20T12:15:50.557Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

