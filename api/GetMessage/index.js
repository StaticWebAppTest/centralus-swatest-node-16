module.exports = async function (context, req) {
  const date = "2022-05-25T21:10:37.262Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

