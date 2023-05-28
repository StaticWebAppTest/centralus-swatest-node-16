module.exports = async function (context, req) {
  const date = "2023-05-28T04:10:01.592Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

