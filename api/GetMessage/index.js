module.exports = async function (context, req) {
  const date = "2023-02-25T02:19:01.888Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

