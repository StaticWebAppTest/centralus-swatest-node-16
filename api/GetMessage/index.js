module.exports = async function (context, req) {
  const date = "2023-03-06T08:13:52.824Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

