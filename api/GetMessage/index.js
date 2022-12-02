module.exports = async function (context, req) {
  const date = "2022-12-02T13:17:15.057Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

