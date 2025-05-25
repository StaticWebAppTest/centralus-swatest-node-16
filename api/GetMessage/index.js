module.exports = async function (context, req) {
  const date = "2025-05-25T11:10:04.862Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

