module.exports = async function (context, req) {
  const date = "2025-05-30T15:13:30.190Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

