module.exports = async function (context, req) {
  const date = "2023-07-14T22:09:15.057Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

