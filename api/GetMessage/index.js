module.exports = async function (context, req) {
  const date = "2024-05-06T11:07:52.950Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

