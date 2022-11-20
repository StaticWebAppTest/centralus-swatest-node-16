module.exports = async function (context, req) {
  const date = "2022-11-20T21:09:11.066Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

