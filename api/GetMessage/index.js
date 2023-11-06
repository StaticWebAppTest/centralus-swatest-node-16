module.exports = async function (context, req) {
  const date = "2023-11-06T21:08:01.952Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

