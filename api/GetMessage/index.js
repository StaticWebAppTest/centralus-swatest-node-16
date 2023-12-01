module.exports = async function (context, req) {
  const date = "2023-12-01T08:12:15.941Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

