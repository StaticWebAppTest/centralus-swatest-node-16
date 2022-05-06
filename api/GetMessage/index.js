module.exports = async function (context, req) {
  const date = "2022-05-06T18:13:27.711Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

