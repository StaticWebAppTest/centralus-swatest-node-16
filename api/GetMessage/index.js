module.exports = async function (context, req) {
  const date = "2022-06-22T21:09:32.601Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

