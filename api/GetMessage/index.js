module.exports = async function (context, req) {
  const date = "2023-05-24T16:11:40.217Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

