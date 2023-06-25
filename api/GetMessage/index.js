module.exports = async function (context, req) {
  const date = "2023-06-25T22:09:08.072Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

