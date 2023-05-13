module.exports = async function (context, req) {
  const date = "2023-05-13T07:07:26.151Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

