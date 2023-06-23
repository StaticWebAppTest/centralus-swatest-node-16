module.exports = async function (context, req) {
  const date = "2023-06-23T09:10:21.624Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

