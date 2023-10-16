module.exports = async function (context, req) {
  const date = "2023-10-16T10:10:00.923Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

