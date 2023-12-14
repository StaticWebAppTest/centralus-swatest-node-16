module.exports = async function (context, req) {
  const date = "2023-12-14T13:12:24.781Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

