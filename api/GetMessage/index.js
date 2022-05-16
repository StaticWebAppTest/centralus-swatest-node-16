module.exports = async function (context, req) {
  const date = "2022-05-16T08:14:54.050Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

