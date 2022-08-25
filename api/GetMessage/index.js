module.exports = async function (context, req) {
  const date = "2022-08-25T06:25:42.998Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

