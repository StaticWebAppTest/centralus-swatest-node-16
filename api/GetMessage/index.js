module.exports = async function (context, req) {
  const date = "2024-03-28T11:08:19.166Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

