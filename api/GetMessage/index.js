module.exports = async function (context, req) {
  const date = "2022-03-04T22:11:47.451Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

