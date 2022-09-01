module.exports = async function (context, req) {
  const date = "2022-09-01T13:31:53.502Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

