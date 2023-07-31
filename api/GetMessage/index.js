module.exports = async function (context, req) {
  const date = "2023-07-31T18:10:51.101Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

