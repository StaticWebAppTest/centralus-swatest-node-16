module.exports = async function (context, req) {
  const date = "2022-11-11T06:16:31.198Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

