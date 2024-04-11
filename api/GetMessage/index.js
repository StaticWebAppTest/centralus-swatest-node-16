module.exports = async function (context, req) {
  const date = "2024-04-11T06:12:39.303Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

