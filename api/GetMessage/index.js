module.exports = async function (context, req) {
  const date = "2024-03-16T15:07:50.652Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

