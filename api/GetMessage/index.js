module.exports = async function (context, req) {
  const date = "2023-05-26T16:11:00.539Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

