module.exports = async function (context, req) {
  const date = "2022-04-26T15:11:33.848Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

