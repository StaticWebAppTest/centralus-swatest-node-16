module.exports = async function (context, req) {
  const date = "2022-09-07T09:12:29.637Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

