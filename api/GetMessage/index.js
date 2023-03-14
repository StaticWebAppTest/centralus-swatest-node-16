module.exports = async function (context, req) {
  const date = "2023-03-14T19:09:09.587Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

