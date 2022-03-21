module.exports = async function (context, req) {
  const date = "2022-03-21T15:10:58.981Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

