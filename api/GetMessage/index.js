module.exports = async function (context, req) {
  const date = "2024-02-16T04:10:23.947Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

