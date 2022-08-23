module.exports = async function (context, req) {
  const date = "2022-08-23T19:09:03.669Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

