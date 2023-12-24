module.exports = async function (context, req) {
  const date = "2023-12-24T09:09:00.579Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

