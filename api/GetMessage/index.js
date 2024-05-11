module.exports = async function (context, req) {
  const date = "2024-05-11T06:11:48.253Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

