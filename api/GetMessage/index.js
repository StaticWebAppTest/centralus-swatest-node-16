module.exports = async function (context, req) {
  const date = "2022-12-01T17:09:24.880Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

