module.exports = async function (context, req) {
  const date = "2022-12-08T19:07:45.388Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

