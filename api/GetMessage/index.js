module.exports = async function (context, req) {
  const date = "2023-11-18T09:07:58.625Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

