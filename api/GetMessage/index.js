module.exports = async function (context, req) {
  const date = "2022-12-07T15:09:52.582Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

