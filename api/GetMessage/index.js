module.exports = async function (context, req) {
  const date = "2024-02-20T11:07:22.116Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

