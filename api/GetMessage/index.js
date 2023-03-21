module.exports = async function (context, req) {
  const date = "2023-03-21T04:10:42.121Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

