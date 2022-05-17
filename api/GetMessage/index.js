module.exports = async function (context, req) {
  const date = "2022-05-17T15:12:17.713Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

