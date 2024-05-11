module.exports = async function (context, req) {
  const date = "2024-05-11T22:08:09.759Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

