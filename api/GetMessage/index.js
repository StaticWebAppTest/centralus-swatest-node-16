module.exports = async function (context, req) {
  const date = "2023-04-20T03:09:36.057Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

