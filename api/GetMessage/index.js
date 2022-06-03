module.exports = async function (context, req) {
  const date = "2022-06-03T23:10:00.665Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

