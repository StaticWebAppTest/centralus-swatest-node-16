module.exports = async function (context, req) {
  const date = "2022-09-21T06:02:10.935Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

