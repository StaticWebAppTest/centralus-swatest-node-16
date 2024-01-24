module.exports = async function (context, req) {
  const date = "2024-01-24T11:08:09.854Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

