module.exports = async function (context, req) {
  const date = "2022-10-10T21:12:05.613Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

