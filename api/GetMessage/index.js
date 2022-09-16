module.exports = async function (context, req) {
  const date = "2022-09-16T13:41:31.689Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

