module.exports = async function (context, req) {
  const date = "2024-03-10T21:07:09.993Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

