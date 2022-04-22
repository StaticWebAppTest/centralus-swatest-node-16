module.exports = async function (context, req) {
  const date = "2022-04-22T08:13:57.294Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

