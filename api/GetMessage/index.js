module.exports = async function (context, req) {
  const date = "2022-03-01T20:10:32.485Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

