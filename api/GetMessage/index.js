module.exports = async function (context, req) {
  const date = "2024-02-27T08:11:21.542Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

