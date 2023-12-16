module.exports = async function (context, req) {
  const date = "2023-12-16T03:09:57.897Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

