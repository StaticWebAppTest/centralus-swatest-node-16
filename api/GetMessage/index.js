module.exports = async function (context, req) {
  const date = "2023-03-13T21:09:01.548Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

