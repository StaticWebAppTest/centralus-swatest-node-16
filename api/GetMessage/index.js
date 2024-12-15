module.exports = async function (context, req) {
  const date = "2024-12-15T14:10:13.906Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

