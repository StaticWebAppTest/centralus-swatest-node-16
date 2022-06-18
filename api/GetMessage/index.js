module.exports = async function (context, req) {
  const date = "2022-06-18T13:20:14.091Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

