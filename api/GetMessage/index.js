module.exports = async function (context, req) {
  const date = "2023-11-25T07:08:00.326Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

