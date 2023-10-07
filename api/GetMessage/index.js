module.exports = async function (context, req) {
  const date = "2023-10-07T05:07:52.006Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

