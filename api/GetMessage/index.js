module.exports = async function (context, req) {
  const date = "2022-07-05T13:42:24.442Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

