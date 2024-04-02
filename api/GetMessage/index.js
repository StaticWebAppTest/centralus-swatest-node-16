module.exports = async function (context, req) {
  const date = "2024-04-02T22:11:02.057Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

