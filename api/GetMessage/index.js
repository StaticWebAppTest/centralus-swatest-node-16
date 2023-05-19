module.exports = async function (context, req) {
  const date = "2023-05-19T22:07:52.405Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

