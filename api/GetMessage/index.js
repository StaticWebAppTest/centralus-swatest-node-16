module.exports = async function (context, req) {
  const date = "2022-12-21T17:08:24.284Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

