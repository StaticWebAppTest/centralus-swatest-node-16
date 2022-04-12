module.exports = async function (context, req) {
  const date = "2022-04-12T20:11:23.822Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

