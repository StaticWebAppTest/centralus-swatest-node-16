module.exports = async function (context, req) {
  const date = "2024-12-04T13:23:23.106Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

