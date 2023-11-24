module.exports = async function (context, req) {
  const date = "2023-11-24T17:08:11.992Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

