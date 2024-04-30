module.exports = async function (context, req) {
  const date = "2024-04-30T11:09:15.981Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

