module.exports = async function (context, req) {
  const date = "2023-07-22T22:07:45.120Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

