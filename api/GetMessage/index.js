module.exports = async function (context, req) {
  const date = "2024-12-25T18:15:04.532Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

