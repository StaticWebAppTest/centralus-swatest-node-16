module.exports = async function (context, req) {
  const date = "2022-11-15T05:10:05.287Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

