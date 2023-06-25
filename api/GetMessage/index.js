module.exports = async function (context, req) {
  const date = "2023-06-25T05:09:33.701Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

