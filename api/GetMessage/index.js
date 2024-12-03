module.exports = async function (context, req) {
  const date = "2024-12-03T13:23:30.504Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

