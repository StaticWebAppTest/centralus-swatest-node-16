module.exports = async function (context, req) {
  const date = "2023-05-05T18:10:27.221Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

