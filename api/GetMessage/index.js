module.exports = async function (context, req) {
  const date = "2022-11-04T01:06:02.711Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

