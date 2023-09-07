module.exports = async function (context, req) {
  const date = "2023-09-07T14:08:05.308Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

