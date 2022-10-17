module.exports = async function (context, req) {
  const date = "2022-10-17T16:26:30.287Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

