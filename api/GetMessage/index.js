module.exports = async function (context, req) {
  const date = "2022-03-28T00:51:05.494Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

