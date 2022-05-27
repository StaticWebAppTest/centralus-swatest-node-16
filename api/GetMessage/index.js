module.exports = async function (context, req) {
  const date = "2022-05-27T03:01:00.480Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

