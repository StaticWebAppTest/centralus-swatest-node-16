module.exports = async function (context, req) {
  const date = "2023-05-24T18:10:51.542Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

