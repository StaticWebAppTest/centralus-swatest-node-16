module.exports = async function (context, req) {
  const date = "2022-12-16T03:10:16.547Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

