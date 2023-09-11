module.exports = async function (context, req) {
  const date = "2023-09-11T15:09:00.295Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

