module.exports = async function (context, req) {
  const date = "2022-05-28T04:15:04.587Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

