module.exports = async function (context, req) {
  const date = "2022-11-26T06:12:27.487Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

