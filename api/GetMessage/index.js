module.exports = async function (context, req) {
  const date = "2023-04-14T08:11:35.059Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

