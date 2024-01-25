module.exports = async function (context, req) {
  const date = "2024-01-25T11:08:19.621Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

