module.exports = async function (context, req) {
  const date = "2023-07-08T13:14:33.865Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

