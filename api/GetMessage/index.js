module.exports = async function (context, req) {
  const date = "2022-06-21T20:11:33.799Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

