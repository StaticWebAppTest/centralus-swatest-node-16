module.exports = async function (context, req) {
  const date = "2023-12-09T11:07:26.587Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

