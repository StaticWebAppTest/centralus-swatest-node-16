module.exports = async function (context, req) {
  const date = "2022-03-25T00:42:47.045Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

