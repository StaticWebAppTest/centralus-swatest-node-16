module.exports = async function (context, req) {
  const date = "2023-11-05T15:07:52.959Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

