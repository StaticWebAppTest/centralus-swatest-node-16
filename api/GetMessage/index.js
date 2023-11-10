module.exports = async function (context, req) {
  const date = "2023-11-10T11:07:25.839Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

