module.exports = async function (context, req) {
  const date = "2024-11-24T06:17:02.723Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

