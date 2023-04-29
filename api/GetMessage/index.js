module.exports = async function (context, req) {
  const date = "2023-04-29T04:10:11.109Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

