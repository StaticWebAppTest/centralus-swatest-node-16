module.exports = async function (context, req) {
  const date = "2024-06-28T11:08:26.709Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

