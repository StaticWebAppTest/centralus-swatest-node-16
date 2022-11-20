module.exports = async function (context, req) {
  const date = "2022-11-20T06:13:12.005Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

