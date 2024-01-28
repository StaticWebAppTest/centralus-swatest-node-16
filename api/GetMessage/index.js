module.exports = async function (context, req) {
  const date = "2024-01-28T14:07:00.110Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

