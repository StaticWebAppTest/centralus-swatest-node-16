module.exports = async function (context, req) {
  const date = "2024-01-01T11:07:53.826Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

