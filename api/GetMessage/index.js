module.exports = async function (context, req) {
  const date = "2023-04-27T09:08:44.587Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

