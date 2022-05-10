module.exports = async function (context, req) {
  const date = "2022-05-10T13:41:12.587Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

