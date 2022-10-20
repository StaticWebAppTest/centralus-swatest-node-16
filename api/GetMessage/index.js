module.exports = async function (context, req) {
  const date = "2022-10-20T14:31:08.375Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

