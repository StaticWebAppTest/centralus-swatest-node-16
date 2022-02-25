module.exports = async function (context, req) {
  const date = "2022-02-25T10:10:47.564Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

