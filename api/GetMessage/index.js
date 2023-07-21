module.exports = async function (context, req) {
  const date = "2023-07-21T14:07:48.542Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

