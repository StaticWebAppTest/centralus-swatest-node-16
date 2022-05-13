module.exports = async function (context, req) {
  const date = "2022-05-13T17:20:54.542Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

