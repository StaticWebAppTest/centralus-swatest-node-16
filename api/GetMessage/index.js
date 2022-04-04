module.exports = async function (context, req) {
  const date = "2022-04-04T18:13:21.303Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

