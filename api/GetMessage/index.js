module.exports = async function (context, req) {
  const date = "2022-06-05T10:10:07.057Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

