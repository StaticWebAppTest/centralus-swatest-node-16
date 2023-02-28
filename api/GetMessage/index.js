module.exports = async function (context, req) {
  const date = "2023-02-28T09:11:08.814Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

