module.exports = async function (context, req) {
  const date = "2024-07-24T11:08:43.541Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

