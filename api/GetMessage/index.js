module.exports = async function (context, req) {
  const date = "2023-02-18T14:08:00.518Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

