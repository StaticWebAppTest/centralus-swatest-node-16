module.exports = async function (context, req) {
  const date = "2023-04-11T15:09:26.476Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

