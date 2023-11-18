module.exports = async function (context, req) {
  const date = "2023-11-18T11:07:01.741Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

