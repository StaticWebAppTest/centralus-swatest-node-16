module.exports = async function (context, req) {
  const date = "2024-12-23T18:15:29.706Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

