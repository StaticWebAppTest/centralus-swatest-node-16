module.exports = async function (context, req) {
  const date = "2024-08-10T04:14:23.802Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

