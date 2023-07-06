module.exports = async function (context, req) {
  const date = "2023-07-06T19:07:44.877Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

