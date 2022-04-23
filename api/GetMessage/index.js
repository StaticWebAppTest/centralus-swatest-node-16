module.exports = async function (context, req) {
  const date = "2022-04-23T18:12:05.062Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

