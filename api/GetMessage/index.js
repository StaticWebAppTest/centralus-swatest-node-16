module.exports = async function (context, req) {
  const date = "2023-09-12T13:11:33.217Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

