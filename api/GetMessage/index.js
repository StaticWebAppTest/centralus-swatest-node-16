module.exports = async function (context, req) {
  const date = "2024-10-11T11:09:59.725Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

