module.exports = async function (context, req) {
  const date = "2024-12-23T06:17:30.924Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

