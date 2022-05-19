module.exports = async function (context, req) {
  const date = "2022-05-19T01:03:04.069Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

