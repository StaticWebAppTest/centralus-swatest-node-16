module.exports = async function (context, req) {
  const date = "2023-01-12T13:23:26.240Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

