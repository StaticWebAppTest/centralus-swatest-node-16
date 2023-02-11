module.exports = async function (context, req) {
  const date = "2023-02-11T15:08:50.393Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

