module.exports = async function (context, req) {
  const date = "2023-10-30T17:07:52.541Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

