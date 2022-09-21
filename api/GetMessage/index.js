module.exports = async function (context, req) {
  const date = "2022-09-21T15:12:46.200Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

