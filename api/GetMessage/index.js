module.exports = async function (context, req) {
  const date = "2022-04-20T06:13:57.518Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

