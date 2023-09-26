module.exports = async function (context, req) {
  const date = "2023-09-26T12:16:52.275Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

