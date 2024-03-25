module.exports = async function (context, req) {
  const date = "2024-03-25T15:10:28.862Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

