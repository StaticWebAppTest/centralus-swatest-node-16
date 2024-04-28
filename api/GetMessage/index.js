module.exports = async function (context, req) {
  const date = "2024-04-28T02:24:08.706Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

