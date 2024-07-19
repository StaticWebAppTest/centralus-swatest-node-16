module.exports = async function (context, req) {
  const date = "2024-07-19T13:13:07.239Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

