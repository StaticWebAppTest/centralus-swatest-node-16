module.exports = async function (context, req) {
  const date = "2023-09-12T03:08:52.897Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

