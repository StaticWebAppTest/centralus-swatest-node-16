module.exports = async function (context, req) {
  const date = "2022-05-28T12:17:55.438Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

