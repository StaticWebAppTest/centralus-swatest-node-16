module.exports = async function (context, req) {
  const date = "2023-09-05T18:10:49.747Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

