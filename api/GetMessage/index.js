module.exports = async function (context, req) {
  const date = "2023-08-03T16:10:05.274Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

