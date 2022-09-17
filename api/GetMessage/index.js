module.exports = async function (context, req) {
  const date = "2022-09-17T03:55:02.866Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

