module.exports = async function (context, req) {
  const date = "2023-09-29T11:07:15.845Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

