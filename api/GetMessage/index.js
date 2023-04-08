module.exports = async function (context, req) {
  const date = "2023-04-08T11:06:45.201Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

