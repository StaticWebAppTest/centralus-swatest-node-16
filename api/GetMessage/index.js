module.exports = async function (context, req) {
  const date = "2022-07-28T06:14:03.472Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

