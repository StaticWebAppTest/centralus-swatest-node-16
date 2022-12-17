module.exports = async function (context, req) {
  const date = "2022-12-17T06:11:07.372Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

