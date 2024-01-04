module.exports = async function (context, req) {
  const date = "2024-01-04T02:21:52.292Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

