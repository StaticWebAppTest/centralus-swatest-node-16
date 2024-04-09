module.exports = async function (context, req) {
  const date = "2024-04-09T11:07:38.597Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

