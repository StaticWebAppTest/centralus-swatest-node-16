module.exports = async function (context, req) {
  const date = "2024-05-07T15:09:09.677Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

