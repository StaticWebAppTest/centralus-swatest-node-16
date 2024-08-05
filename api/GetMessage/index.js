module.exports = async function (context, req) {
  const date = "2024-08-05T06:15:37.533Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

