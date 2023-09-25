module.exports = async function (context, req) {
  const date = "2023-09-25T09:09:29.961Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

