module.exports = async function (context, req) {
  const date = "2022-04-12T11:09:09.587Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

