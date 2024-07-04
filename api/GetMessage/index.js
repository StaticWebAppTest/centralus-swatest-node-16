module.exports = async function (context, req) {
  const date = "2024-07-04T13:12:31.887Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

