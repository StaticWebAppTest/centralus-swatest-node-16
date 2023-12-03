module.exports = async function (context, req) {
  const date = "2023-12-03T06:11:10.711Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

