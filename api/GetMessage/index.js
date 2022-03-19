module.exports = async function (context, req) {
  const date = "2022-03-19T20:09:58.708Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

