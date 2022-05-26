module.exports = async function (context, req) {
  const date = "2022-05-26T11:09:46.696Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

