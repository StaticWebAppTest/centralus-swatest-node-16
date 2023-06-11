module.exports = async function (context, req) {
  const date = "2023-06-11T15:08:01.848Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

