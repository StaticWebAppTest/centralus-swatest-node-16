module.exports = async function (context, req) {
  const date = "2023-10-30T11:07:32.070Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

