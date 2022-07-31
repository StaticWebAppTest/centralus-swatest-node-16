module.exports = async function (context, req) {
  const date = "2022-07-31T15:10:18.777Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

