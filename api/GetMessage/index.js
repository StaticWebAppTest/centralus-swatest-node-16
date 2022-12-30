module.exports = async function (context, req) {
  const date = "2022-12-30T06:12:15.971Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

