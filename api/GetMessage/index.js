module.exports = async function (context, req) {
  const date = "2024-05-10T05:09:22.057Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

