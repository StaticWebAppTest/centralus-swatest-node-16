module.exports = async function (context, req) {
  const date = "2023-05-22T03:09:45.747Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

