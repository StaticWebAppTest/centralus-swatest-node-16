module.exports = async function (context, req) {
  const date = "2023-12-21T14:08:30.308Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

