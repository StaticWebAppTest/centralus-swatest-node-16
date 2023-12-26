module.exports = async function (context, req) {
  const date = "2023-12-26T18:11:01.546Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

