module.exports = async function (context, req) {
  const date = "2023-07-09T11:07:29.322Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

