module.exports = async function (context, req) {
  const date = "2023-01-11T20:10:00.260Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

