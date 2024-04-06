module.exports = async function (context, req) {
  const date = "2024-04-06T15:08:00.697Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

