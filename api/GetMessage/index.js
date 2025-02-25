module.exports = async function (context, req) {
  const date = "2025-02-25T14:11:50.190Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

