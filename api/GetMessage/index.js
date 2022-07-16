module.exports = async function (context, req) {
  const date = "2022-07-16T21:08:56.187Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

