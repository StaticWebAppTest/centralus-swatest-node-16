module.exports = async function (context, req) {
  const date = "2023-09-22T09:08:43.956Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

