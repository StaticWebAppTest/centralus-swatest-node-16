module.exports = async function (context, req) {
  const date = "2023-12-12T17:08:31.057Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

