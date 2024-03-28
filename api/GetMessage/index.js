module.exports = async function (context, req) {
  const date = "2024-03-28T23:09:29.706Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

