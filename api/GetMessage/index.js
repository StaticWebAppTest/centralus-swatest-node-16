module.exports = async function (context, req) {
  const date = "2024-08-04T13:11:27.583Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

