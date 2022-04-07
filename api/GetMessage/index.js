module.exports = async function (context, req) {
  const date = "2022-04-07T15:09:47.287Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

