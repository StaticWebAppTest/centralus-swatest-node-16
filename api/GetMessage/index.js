module.exports = async function (context, req) {
  const date = "2022-03-16T21:09:41.185Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

