module.exports = async function (context, req) {
  const date = "2023-10-01T17:07:08.829Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

