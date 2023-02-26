module.exports = async function (context, req) {
  const date = "2023-02-26T18:11:23.076Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

