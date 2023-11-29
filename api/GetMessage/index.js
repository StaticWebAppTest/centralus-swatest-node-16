module.exports = async function (context, req) {
  const date = "2023-11-29T04:11:35.669Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

