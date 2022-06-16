module.exports = async function (context, req) {
  const date = "2022-06-16T15:10:30.542Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

