module.exports = async function (context, req) {
  const date = "2022-10-05T07:25:50.542Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

