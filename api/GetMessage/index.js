module.exports = async function (context, req) {
  const date = "2023-06-20T18:09:52.587Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

