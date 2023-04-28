module.exports = async function (context, req) {
  const date = "2023-04-28T08:11:31.907Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

