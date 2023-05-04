module.exports = async function (context, req) {
  const date = "2023-05-04T10:09:26.714Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

