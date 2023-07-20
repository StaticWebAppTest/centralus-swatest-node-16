module.exports = async function (context, req) {
  const date = "2023-07-20T07:08:33.551Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

