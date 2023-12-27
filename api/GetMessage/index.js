module.exports = async function (context, req) {
  const date = "2023-12-27T23:09:02.610Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

