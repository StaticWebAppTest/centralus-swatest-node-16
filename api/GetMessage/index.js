module.exports = async function (context, req) {
  const date = "2022-04-28T23:11:00.260Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

