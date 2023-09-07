module.exports = async function (context, req) {
  const date = "2023-09-07T23:08:45.658Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

