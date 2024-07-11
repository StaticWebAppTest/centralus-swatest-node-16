module.exports = async function (context, req) {
  const date = "2024-07-11T11:09:26.127Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

