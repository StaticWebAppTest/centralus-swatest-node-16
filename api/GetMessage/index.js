module.exports = async function (context, req) {
  const date = "2023-04-04T11:07:30.008Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

