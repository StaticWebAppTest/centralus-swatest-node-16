module.exports = async function (context, req) {
  const date = "2024-09-20T23:11:05.595Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

