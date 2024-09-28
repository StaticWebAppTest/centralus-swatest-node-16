module.exports = async function (context, req) {
  const date = "2024-09-28T13:15:27.551Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

