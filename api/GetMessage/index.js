module.exports = async function (context, req) {
  const date = "2023-05-31T20:09:00.108Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

