module.exports = async function (context, req) {
  const date = "2023-02-11T06:11:46.833Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

