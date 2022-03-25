module.exports = async function (context, req) {
  const date = "2022-03-25T16:14:54.082Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

