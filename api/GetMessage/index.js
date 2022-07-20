module.exports = async function (context, req) {
  const date = "2022-07-20T19:08:45.063Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

