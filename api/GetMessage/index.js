module.exports = async function (context, req) {
  const date = "2022-11-27T11:08:11.746Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

