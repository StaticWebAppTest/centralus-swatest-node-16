module.exports = async function (context, req) {
  const date = "2022-10-31T18:18:04.599Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

