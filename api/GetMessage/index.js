module.exports = async function (context, req) {
  const date = "2024-04-28T09:08:54.257Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

