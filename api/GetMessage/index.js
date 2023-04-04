module.exports = async function (context, req) {
  const date = "2023-04-04T21:07:46.900Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

