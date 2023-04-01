module.exports = async function (context, req) {
  const date = "2023-04-01T12:15:02.850Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

