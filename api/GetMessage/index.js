module.exports = async function (context, req) {
  const date = "2023-08-28T23:08:30.985Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

