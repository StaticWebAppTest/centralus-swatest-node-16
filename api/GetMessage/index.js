module.exports = async function (context, req) {
  const date = "2024-05-06T01:51:03.976Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

