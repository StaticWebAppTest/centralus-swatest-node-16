module.exports = async function (context, req) {
  const date = "2024-12-11T20:14:15.322Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

