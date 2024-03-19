module.exports = async function (context, req) {
  const date = "2024-03-19T14:08:46.906Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

