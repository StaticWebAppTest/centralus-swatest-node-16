module.exports = async function (context, req) {
  const date = "2022-08-24T18:22:23.543Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

