module.exports = async function (context, req) {
  const date = "2023-11-06T17:08:13.066Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

