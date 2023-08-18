module.exports = async function (context, req) {
  const date = "2023-08-18T11:06:52.023Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

