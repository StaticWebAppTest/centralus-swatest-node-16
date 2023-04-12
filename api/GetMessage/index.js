module.exports = async function (context, req) {
  const date = "2023-04-12T20:09:12.059Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

