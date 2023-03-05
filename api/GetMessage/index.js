module.exports = async function (context, req) {
  const date = "2023-03-05T11:07:39.625Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

