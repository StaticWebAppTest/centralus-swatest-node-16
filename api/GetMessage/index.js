module.exports = async function (context, req) {
  const date = "2024-09-14T08:15:01.345Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

