module.exports = async function (context, req) {
  const date = "2023-07-03T05:10:00.623Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

