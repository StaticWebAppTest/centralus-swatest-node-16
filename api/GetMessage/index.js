module.exports = async function (context, req) {
  const date = "2022-07-28T22:09:49.689Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

