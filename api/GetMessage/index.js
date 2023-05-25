module.exports = async function (context, req) {
  const date = "2023-05-25T15:08:53.494Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

