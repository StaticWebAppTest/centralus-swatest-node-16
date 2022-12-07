module.exports = async function (context, req) {
  const date = "2022-12-07T10:10:39.438Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

