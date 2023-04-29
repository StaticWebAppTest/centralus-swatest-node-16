module.exports = async function (context, req) {
  const date = "2023-04-29T17:07:11.037Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

