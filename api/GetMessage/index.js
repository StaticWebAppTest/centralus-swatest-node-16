module.exports = async function (context, req) {
  const date = "2024-05-11T04:11:04.250Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

