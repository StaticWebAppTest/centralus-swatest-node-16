module.exports = async function (context, req) {
  const date = "2024-05-08T08:10:51.981Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

