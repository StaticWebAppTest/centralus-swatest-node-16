module.exports = async function (context, req) {
  const date = "2024-06-03T05:11:45.342Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

