module.exports = async function (context, req) {
  const date = "2024-05-16T08:10:22.522Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

