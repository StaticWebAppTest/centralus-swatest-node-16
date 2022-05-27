module.exports = async function (context, req) {
  const date = "2022-05-27T08:14:17.200Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

