module.exports = async function (context, req) {
  const date = "2025-12-23T13:31:21.190Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

