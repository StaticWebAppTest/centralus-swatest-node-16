module.exports = async function (context, req) {
  const date = "2023-02-17T10:11:00.962Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

