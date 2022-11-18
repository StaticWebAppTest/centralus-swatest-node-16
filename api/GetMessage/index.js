module.exports = async function (context, req) {
  const date = "2022-11-18T19:08:57.799Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

