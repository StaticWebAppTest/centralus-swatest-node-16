module.exports = async function (context, req) {
  const date = "2023-02-01T02:32:50.078Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

