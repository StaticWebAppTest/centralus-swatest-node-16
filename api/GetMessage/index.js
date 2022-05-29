module.exports = async function (context, req) {
  const date = "2022-05-29T15:11:03.613Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

