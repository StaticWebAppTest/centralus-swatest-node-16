module.exports = async function (context, req) {
  const date = "2023-02-06T23:09:06.954Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

