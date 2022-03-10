module.exports = async function (context, req) {
  const date = "2022-03-10T10:10:54.057Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

