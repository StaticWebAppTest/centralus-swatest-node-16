module.exports = async function (context, req) {
  const date = "2023-11-14T07:08:18.057Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

