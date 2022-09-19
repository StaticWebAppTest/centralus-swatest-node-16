module.exports = async function (context, req) {
  const date = "2022-09-19T10:13:28.714Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

