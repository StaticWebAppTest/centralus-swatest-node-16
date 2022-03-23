module.exports = async function (context, req) {
  const date = "2022-03-23T13:20:05.163Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

