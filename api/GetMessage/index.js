module.exports = async function (context, req) {
  const date = "2022-04-11T16:15:06.496Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

