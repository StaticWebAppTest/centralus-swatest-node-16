module.exports = async function (context, req) {
  const date = "2023-08-14T13:10:37.394Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

