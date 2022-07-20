module.exports = async function (context, req) {
  const date = "2022-07-20T06:14:22.038Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

