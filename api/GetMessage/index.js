module.exports = async function (context, req) {
  const date = "2024-01-28T07:08:35.209Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

