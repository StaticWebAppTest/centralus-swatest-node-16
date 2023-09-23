module.exports = async function (context, req) {
  const date = "2023-09-23T08:10:00.301Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

