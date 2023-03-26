module.exports = async function (context, req) {
  const date = "2023-03-26T06:11:07.017Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

