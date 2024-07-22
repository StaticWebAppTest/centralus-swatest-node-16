module.exports = async function (context, req) {
  const date = "2024-07-22T15:11:43.209Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

