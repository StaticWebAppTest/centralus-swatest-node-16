module.exports = async function (context, req) {
  const date = "2022-04-05T23:10:56.448Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

