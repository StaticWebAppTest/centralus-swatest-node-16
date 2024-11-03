module.exports = async function (context, req) {
  const date = "2024-11-03T15:10:52.932Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

