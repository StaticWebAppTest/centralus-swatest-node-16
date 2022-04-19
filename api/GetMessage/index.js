module.exports = async function (context, req) {
  const date = "2022-04-19T16:15:20.795Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

