module.exports = async function (context, req) {
  const date = "2023-10-03T06:12:13.431Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

