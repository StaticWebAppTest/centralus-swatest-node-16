module.exports = async function (context, req) {
  const date = "2023-05-24T13:12:02.809Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

