module.exports = async function (context, req) {
  const date = "2023-02-09T08:13:04.941Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

