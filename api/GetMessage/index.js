module.exports = async function (context, req) {
  const date = "2022-10-11T15:15:43.771Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

