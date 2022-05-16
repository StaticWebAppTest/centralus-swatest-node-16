module.exports = async function (context, req) {
  const date = "2022-05-16T03:32:16.010Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

