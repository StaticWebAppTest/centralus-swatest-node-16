module.exports = async function (context, req) {
  const date = "2022-10-20T06:23:38.308Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

