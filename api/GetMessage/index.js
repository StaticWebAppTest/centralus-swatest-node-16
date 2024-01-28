module.exports = async function (context, req) {
  const date = "2024-01-28T15:07:38.959Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

