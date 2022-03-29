module.exports = async function (context, req) {
  const date = "2022-03-29T15:11:00.065Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

