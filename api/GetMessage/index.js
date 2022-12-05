module.exports = async function (context, req) {
  const date = "2022-12-05T19:07:48.193Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

