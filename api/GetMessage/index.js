module.exports = async function (context, req) {
  const date = "2023-03-13T08:13:19.542Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

