module.exports = async function (context, req) {
  const date = "2022-03-31T15:11:40.239Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

