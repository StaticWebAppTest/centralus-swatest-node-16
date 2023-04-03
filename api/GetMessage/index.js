module.exports = async function (context, req) {
  const date = "2023-04-03T20:09:15.390Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

