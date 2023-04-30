module.exports = async function (context, req) {
  const date = "2023-04-30T11:06:30.337Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

