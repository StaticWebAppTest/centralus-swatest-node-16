module.exports = async function (context, req) {
  const date = "2024-07-14T20:10:09.993Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

