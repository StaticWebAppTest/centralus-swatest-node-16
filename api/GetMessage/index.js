module.exports = async function (context, req) {
  const date = "2022-11-17T06:13:46.016Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

