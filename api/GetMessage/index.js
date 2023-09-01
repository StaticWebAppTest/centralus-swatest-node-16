module.exports = async function (context, req) {
  const date = "2023-09-01T01:49:07.958Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

