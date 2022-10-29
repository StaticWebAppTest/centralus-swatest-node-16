module.exports = async function (context, req) {
  const date = "2022-10-29T04:28:56.037Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

