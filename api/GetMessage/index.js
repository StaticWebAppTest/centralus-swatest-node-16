module.exports = async function (context, req) {
  const date = "2022-10-16T23:14:16.431Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

