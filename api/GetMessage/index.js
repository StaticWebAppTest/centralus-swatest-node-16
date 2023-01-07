module.exports = async function (context, req) {
  const date = "2023-01-07T09:08:25.900Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

