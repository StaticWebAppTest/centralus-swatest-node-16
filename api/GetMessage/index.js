module.exports = async function (context, req) {
  const date = "2023-08-12T23:07:20.993Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

