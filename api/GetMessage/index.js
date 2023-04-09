module.exports = async function (context, req) {
  const date = "2023-04-09T16:10:18.405Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

