module.exports = async function (context, req) {
  const date = "2024-03-29T16:10:22.057Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

