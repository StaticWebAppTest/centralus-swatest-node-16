module.exports = async function (context, req) {
  const date = "2024-09-16T05:12:45.284Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

