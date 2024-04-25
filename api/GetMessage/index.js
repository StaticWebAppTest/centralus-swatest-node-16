module.exports = async function (context, req) {
  const date = "2024-04-25T18:12:05.898Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

