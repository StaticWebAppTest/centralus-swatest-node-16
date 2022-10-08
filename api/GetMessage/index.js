module.exports = async function (context, req) {
  const date = "2022-10-08T07:16:18.057Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

