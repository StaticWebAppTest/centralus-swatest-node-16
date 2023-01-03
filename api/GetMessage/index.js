module.exports = async function (context, req) {
  const date = "2023-01-03T02:07:23.706Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

