module.exports = async function (context, req) {
  const date = "2022-07-07T14:15:31.005Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

