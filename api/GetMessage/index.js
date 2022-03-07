module.exports = async function (context, req) {
  const date = "2022-03-07T09:10:12.167Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

