module.exports = async function (context, req) {
  const date = "2023-05-07T06:11:00.931Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

