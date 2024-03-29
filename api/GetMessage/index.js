module.exports = async function (context, req) {
  const date = "2024-03-29T04:11:56.896Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

