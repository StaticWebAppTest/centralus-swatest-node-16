module.exports = async function (context, req) {
  const date = "2022-05-28T20:11:30.330Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

