module.exports = async function (context, req) {
  const date = "2022-10-17T11:15:00.740Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

