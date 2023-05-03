module.exports = async function (context, req) {
  const date = "2023-05-03T04:10:22.354Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

