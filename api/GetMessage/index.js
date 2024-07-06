module.exports = async function (context, req) {
  const date = "2024-07-06T04:12:44.981Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

