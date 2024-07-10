module.exports = async function (context, req) {
  const date = "2024-07-10T06:14:21.735Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

