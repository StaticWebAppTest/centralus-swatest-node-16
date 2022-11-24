module.exports = async function (context, req) {
  const date = "2022-11-24T17:09:19.587Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

