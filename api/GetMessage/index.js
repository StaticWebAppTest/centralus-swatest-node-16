module.exports = async function (context, req) {
  const date = "2022-06-05T17:08:57.938Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

