module.exports = async function (context, req) {
  const date = "2024-08-01T21:11:00.275Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

