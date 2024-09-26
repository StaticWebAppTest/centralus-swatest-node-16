module.exports = async function (context, req) {
  const date = "2024-09-26T21:10:02.748Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

