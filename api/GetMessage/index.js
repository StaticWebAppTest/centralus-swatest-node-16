module.exports = async function (context, req) {
  const date = "2023-12-07T03:10:04.866Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

