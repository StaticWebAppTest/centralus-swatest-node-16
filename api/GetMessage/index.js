module.exports = async function (context, req) {
  const date = "2023-10-06T13:12:16.370Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

