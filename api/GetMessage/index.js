module.exports = async function (context, req) {
  const date = "2024-04-21T09:09:42.057Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

