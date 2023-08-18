module.exports = async function (context, req) {
  const date = "2023-08-18T23:07:40.519Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

