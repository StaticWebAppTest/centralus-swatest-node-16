module.exports = async function (context, req) {
  const date = "2023-12-30T21:07:35.190Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

