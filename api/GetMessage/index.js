module.exports = async function (context, req) {
  const date = "2023-11-18T02:20:52.723Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

