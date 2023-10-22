module.exports = async function (context, req) {
  const date = "2023-10-22T06:11:06.431Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

