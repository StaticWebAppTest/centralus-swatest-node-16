module.exports = async function (context, req) {
  const date = "2022-03-24T10:11:19.494Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

