module.exports = async function (context, req) {
  const date = "2024-07-05T07:09:53.644Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

