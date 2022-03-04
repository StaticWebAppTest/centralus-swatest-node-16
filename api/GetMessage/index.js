module.exports = async function (context, req) {
  const date = "2022-03-04T06:12:29.354Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

