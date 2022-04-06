module.exports = async function (context, req) {
  const date = "2022-04-06T16:13:50.438Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

