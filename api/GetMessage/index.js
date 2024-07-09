module.exports = async function (context, req) {
  const date = "2024-07-09T14:09:28.518Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

