module.exports = async function (context, req) {
  const date = "2022-06-03T15:10:50.171Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

