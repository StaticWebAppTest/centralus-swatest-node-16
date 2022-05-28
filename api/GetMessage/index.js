module.exports = async function (context, req) {
  const date = "2022-05-28T06:14:01.935Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

