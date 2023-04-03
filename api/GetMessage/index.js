module.exports = async function (context, req) {
  const date = "2023-04-03T21:07:47.750Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

