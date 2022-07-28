module.exports = async function (context, req) {
  const date = "2022-07-28T23:12:16.010Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

