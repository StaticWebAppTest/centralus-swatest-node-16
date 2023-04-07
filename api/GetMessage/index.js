module.exports = async function (context, req) {
  const date = "2023-04-07T15:08:30.652Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

