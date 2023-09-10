module.exports = async function (context, req) {
  const date = "2023-09-10T13:08:34.896Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

