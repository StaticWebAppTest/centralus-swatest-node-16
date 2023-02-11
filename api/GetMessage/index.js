module.exports = async function (context, req) {
  const date = "2023-02-11T04:11:37.542Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

