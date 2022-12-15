module.exports = async function (context, req) {
  const date = "2022-12-15T04:12:28.542Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

