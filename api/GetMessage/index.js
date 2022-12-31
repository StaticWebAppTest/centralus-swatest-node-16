module.exports = async function (context, req) {
  const date = "2022-12-31T03:09:58.370Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

