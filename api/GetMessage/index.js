module.exports = async function (context, req) {
  const date = "2022-08-26T11:09:57.754Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

