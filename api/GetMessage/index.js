module.exports = async function (context, req) {
  const date = "2024-11-30T18:14:54.190Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

