module.exports = async function (context, req) {
  const date = "2022-12-27T17:08:22.296Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

