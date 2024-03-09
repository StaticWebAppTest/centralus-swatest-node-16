module.exports = async function (context, req) {
  const date = "2024-03-09T06:13:32.988Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

