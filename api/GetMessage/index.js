module.exports = async function (context, req) {
  const date = "2023-04-11T02:30:52.735Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

