module.exports = async function (context, req) {
  const date = "2022-12-03T23:09:09.971Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

