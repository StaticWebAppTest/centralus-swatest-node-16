module.exports = async function (context, req) {
  const date = "2024-02-20T14:08:26.947Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

