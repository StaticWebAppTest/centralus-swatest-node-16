module.exports = async function (context, req) {
  const date = "2022-03-16T08:12:20.542Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

