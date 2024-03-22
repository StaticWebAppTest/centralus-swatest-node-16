module.exports = async function (context, req) {
  const date = "2024-03-22T21:08:40.896Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

