module.exports = async function (context, req) {
  const date = "2023-02-27T02:19:35.563Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

