module.exports = async function (context, req) {
  const date = "2023-05-24T06:11:35.494Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

