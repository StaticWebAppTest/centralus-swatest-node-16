module.exports = async function (context, req) {
  const date = "2022-08-30T17:18:36.057Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

