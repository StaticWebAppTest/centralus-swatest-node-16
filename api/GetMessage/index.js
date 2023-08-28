module.exports = async function (context, req) {
  const date = "2023-08-28T18:10:55.818Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

