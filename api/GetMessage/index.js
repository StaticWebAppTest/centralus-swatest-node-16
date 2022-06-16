module.exports = async function (context, req) {
  const date = "2022-06-16T02:57:58.277Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

