module.exports = async function (context, req) {
  const date = "2023-09-14T11:07:14.842Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

