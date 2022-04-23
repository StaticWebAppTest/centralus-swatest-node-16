module.exports = async function (context, req) {
  const date = "2022-04-23T04:12:31.415Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

