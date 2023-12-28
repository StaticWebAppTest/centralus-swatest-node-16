module.exports = async function (context, req) {
  const date = "2023-12-28T22:08:18.546Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

