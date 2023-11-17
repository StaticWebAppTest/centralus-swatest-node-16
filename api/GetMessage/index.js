module.exports = async function (context, req) {
  const date = "2023-11-17T08:11:52.001Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

