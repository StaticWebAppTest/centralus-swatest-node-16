module.exports = async function (context, req) {
  const date = "2023-04-19T19:07:25.057Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

