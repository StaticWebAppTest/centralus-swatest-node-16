module.exports = async function (context, req) {
  const date = "2023-03-12T19:07:17.057Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

