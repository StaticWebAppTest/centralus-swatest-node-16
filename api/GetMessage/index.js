module.exports = async function (context, req) {
  const date = "2022-09-26T14:27:12.866Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

