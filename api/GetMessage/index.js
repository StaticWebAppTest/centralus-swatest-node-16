module.exports = async function (context, req) {
  const date = "2023-08-09T11:07:26.104Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

