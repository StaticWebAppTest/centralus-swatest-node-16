module.exports = async function (context, req) {
  const date = "2023-08-30T03:09:08.634Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

