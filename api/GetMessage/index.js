module.exports = async function (context, req) {
  const date = "2022-10-17T21:12:27.494Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

