module.exports = async function (context, req) {
  const date = "2024-01-04T13:11:11.294Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

