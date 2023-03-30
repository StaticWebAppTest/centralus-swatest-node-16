module.exports = async function (context, req) {
  const date = "2023-03-30T11:07:59.112Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

