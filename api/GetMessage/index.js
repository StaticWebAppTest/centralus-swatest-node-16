module.exports = async function (context, req) {
  const date = "2023-09-06T11:07:07.842Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

