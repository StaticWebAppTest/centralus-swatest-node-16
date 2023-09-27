module.exports = async function (context, req) {
  const date = "2023-09-27T21:07:46.632Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

