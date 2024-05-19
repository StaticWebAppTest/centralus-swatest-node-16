module.exports = async function (context, req) {
  const date = "2024-05-19T11:08:26.154Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

