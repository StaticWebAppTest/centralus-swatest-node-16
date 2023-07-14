module.exports = async function (context, req) {
  const date = "2023-07-14T19:07:54.587Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

