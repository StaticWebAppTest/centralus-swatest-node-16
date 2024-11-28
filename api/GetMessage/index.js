module.exports = async function (context, req) {
  const date = "2024-11-28T16:15:03.551Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

