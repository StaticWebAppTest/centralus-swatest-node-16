module.exports = async function (context, req) {
  const date = "2023-10-08T09:07:55.217Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

