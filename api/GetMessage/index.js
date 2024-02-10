module.exports = async function (context, req) {
  const date = "2024-02-10T12:15:03.142Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

