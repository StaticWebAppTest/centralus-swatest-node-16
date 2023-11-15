module.exports = async function (context, req) {
  const date = "2023-11-15T23:09:08.223Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

