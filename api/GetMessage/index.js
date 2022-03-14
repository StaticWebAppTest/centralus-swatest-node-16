module.exports = async function (context, req) {
  const date = "2022-03-14T15:11:45.192Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

