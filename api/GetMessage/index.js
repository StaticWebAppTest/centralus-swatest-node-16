module.exports = async function (context, req) {
  const date = "2024-04-23T06:12:36.147Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

