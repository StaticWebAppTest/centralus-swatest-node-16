module.exports = async function (context, req) {
  const date = "2023-09-28T00:40:42.606Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

