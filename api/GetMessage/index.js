module.exports = async function (context, req) {
  const date = "2022-07-09T02:52:32.973Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

