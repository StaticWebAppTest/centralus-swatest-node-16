module.exports = async function (context, req) {
  const date = "2024-11-23T20:12:19.446Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

