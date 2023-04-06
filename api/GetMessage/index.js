module.exports = async function (context, req) {
  const date = "2023-04-06T17:07:30.624Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

