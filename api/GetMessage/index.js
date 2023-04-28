module.exports = async function (context, req) {
  const date = "2023-04-28T07:08:38.326Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

