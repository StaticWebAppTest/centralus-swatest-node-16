module.exports = async function (context, req) {
  const date = "2023-02-03T02:20:02.308Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

