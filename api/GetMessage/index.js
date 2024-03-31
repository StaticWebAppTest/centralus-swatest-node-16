module.exports = async function (context, req) {
  const date = "2024-03-31T09:09:09.057Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

