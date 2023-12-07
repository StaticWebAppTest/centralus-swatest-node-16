module.exports = async function (context, req) {
  const date = "2023-12-07T23:09:45.091Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

